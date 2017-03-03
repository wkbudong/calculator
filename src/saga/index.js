/**
 * Created by Administrator on 2017/3/3.
 */
import calculator from './calculator';

export default function* root() {
    yield [
        ...calculator()
    ];
}