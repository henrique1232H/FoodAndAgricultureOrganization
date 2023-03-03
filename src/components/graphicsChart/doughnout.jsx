import { useState } from "react";

import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js";
import { UserData } from "./data";


export function Doughnout({chartData}) {


    return (
        <Pie chartData={UserData} />
    )
}