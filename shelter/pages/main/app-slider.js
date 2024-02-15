import './style.css'
import { createComponent } from "./components/slider/slider";
import { petsJSON } from "./main.json" assert { type: "json" };

const slider = createComponent(petsJSON);
document.body.append(slider);