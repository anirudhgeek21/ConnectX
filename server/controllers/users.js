import User from "../model/User.js";
import mongoose from 'mongoose';

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
      
      console.log(`Fetching user with id: ${id}`); // Log the id being fetched
  
      // Check if the ID is a valid MongoDB ObjectID
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid user ID format" });
      }
  
      const user = await User.findById(id);
      console.log('User fetched:', user); // Log the user fetched
  
      if (!user) {
        console.log('User not found');
        return res.status(404).json({ message: "User not found" });
      }
      
      res.status(200).json(user);
    } catch (err) {
      console.error(`Error fetching user with id: ${id}`, err); // Log the error
      res.status(500).json({ message: err.message });
    }
  };


export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user || !user.friends) {
            res.status(200).json([]);
            return;
        }

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Update
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((friendId) => friendId !== friendId);
      friend.friends = friend.friends.filter((friendId) => friendId !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, picturePath, college, communities }) => {
        return { _id, firstName, lastName, picturePath, college, communities };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
