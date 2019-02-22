import {account_name as accountName} from "../prototype/type_pb"
import {generatePrivKey} from './crypto'

export class account_name extends accountName {
    validate = () => {
        let name = this.getValue();
        if(name.length < 6 || name.length > 16) {
            return false
        }
        return name.match(/^[A-Za-z0-9]+$/i) !== null;
    };

    generateNewKeys = () => {
        let p = generatePrivKey();
        console.log(p.toWIF());
    }
}
