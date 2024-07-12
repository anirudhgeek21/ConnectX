import mongoose from "mongoose";

const communitySchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        communityId: {
            type: String,
            required: true,
        },
        communityName :{
            type: String,
            required: true,
        },
        communityDescription: {
            type: String,
            required: true,

        },
        CommunityPicturePath: String,
        members: {
            type: Array,
            default: [],
        },
        moderators: {
            type: Array,
            default: [],
        },
        instagram: String,
        facebook: String,
        linkedin: String,
        
    },
    {timestamp: true}
);

const Community = mongoose.model("Community",communitySchema);
export default Community;