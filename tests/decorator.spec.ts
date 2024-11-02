import test from "@playwright/test";
import { log } from "console";
import { CustomerServiceColumnComponent } from "../models/components/global/footer/CustomerServiceColumnComponent";

function getComponentSelector(compClass){
    log(compClass.selectorValue)
}

test('Test Decorator', () => {
    getComponentSelector(CustomerServiceColumnComponent);
})