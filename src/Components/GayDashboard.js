import { useState } from "react";
import GayKnob from "./GayKnob";

export default function GayDashboard() {

    const [gayRating, setGayRating] = useState(0);

    return (
        <div>
            <h1>Below Are some Silly Gay Ratings for the Queers</h1>
            <GayKnob 
            />
        </div>
    )
}