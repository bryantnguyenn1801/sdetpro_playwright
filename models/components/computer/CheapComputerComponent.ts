import { ComputerComponent } from "./ComputerComponent";

export class CheapComputerComponent implements ComputerComponent {

    selectRAM(value: string) {
        console.log('Cheap  ComputerComponent | Select RAM');
    }

}