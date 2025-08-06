import mongoose from 'mongoose';
import { updateBookRatings } from '../utils/calculateRatings.js';

const reviewSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
        trim: true,
    },
},
    {
        timestamps: true,
    });

reviewSchema.post('save', async function () {
    await updateBookRatings(this.book);
});

reviewSchema.post("remove", async function () {
    await updateBookRatings(this.book);
});

export const Review = mongoose.model('Review', reviewSchema);
