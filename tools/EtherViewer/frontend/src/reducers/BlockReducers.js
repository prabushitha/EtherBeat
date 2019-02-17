import {ACTION_TYPES} from "../constants";

const initialBlockList = {
    blocks: [],
    start: 1,
    limit: 50,
    error:null
};

export const BlockListReducer = (state = initialBlockList, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOADING_BLOCKS_ERROR:
            return { ...initialBlockList, error: action.payload };
        case ACTION_TYPES.LOADING_BLOCKS_SUCCESS:
            return { ...initialBlockList, blocks: action.payload, error: null };
        case ACTION_TYPES.LOADING_BLOCKS:
            return { ...initialBlockList, error: null };
        case ACTION_TYPES.SET_BLOCKS_LIMIT:
            return {...state, limit: action.payload};
        default:
            return state;
    }
};

const initialSelectedBlock = {
    "id": null,
    "hash": null,
    "parentHash": null,
    "sha3Uncles": null,
    "beneficiary": null,
    "stateRoot": null,
    "transactionsRoot": null,
    "receiptsRoot": null,
    "logsBloom": null,
    "difficulty": null,
    "gasLimit": null,
    "gasUsed": null,
    "timestamp": null,
    "extraData": null,
    "mixHash": null,
    "nonce": null
};

export const SelectedBlockReducer = (state = initialSelectedBlock, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOADING_BLOCK_ERROR:
            return { ...initialSelectedBlock, error: action.payload };
        case ACTION_TYPES.LOADING_BLOCK_SUCCESS:
            return { ...initialSelectedBlock, ...action.payload, error: null };
        case ACTION_TYPES.LOADING_BLOCKS:
            return { ...initialSelectedBlock, error: null };
        default:
            return state;
    }
}