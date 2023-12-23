import { Canister, bool, query, AzleText, update, AzleVoid, AzleVec} from 'azle';

// This is a global variable that is stored on the heap
let flipHistory: string[] = [];

export default Canister({
    // Query calls complete quickly because they do not go through consensus
    getFlipHistory: query([], new AzleVec(AzleText), () => {
        return flipHistory;
    }),
    // Update calls take a few seconds to complete
    // This is because they persist state changes and go through consensus
    flipCoin: update([], AzleText, () => {
        let result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        flipHistory.push(result);
        return result
    })
});
