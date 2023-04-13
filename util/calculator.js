export const initiateState = {
    currentValue: 0,
    operator: null,
    previousValue: null
}

export const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
        return {currentValue: `${value}` }
}

    return {
        currentValue: `${State.currentValue$Value}`,

    }
}

const handleEqual = (state) => {
    const { currentValue, previousValue, operator } = state

    const current = parseFloat(currentValue)
    const previous = parseFloat(previousValue)
    const resetState = { operator: null, previousValue: null }
    
    switch (operator) {
        case "+":
            return {
                currentValue: `${previous + current}`,
                ...resetState
            }
        case "-":
            return {
                currentValue: `${previous - current}`,
                ...resetState
            }
        case "*":
            return {
                currentValue: `${previous * current}`,
                ...resetState
            }
        case "/":
            return {
                currentValue: `${previous / current}`,
                ...resetState
            }
        
        default:
            return state;
    }
}