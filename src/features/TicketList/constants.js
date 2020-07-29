export const OptionsOfNumberTransfers = {
    ALL: 'Все',
    ZERO: 'Без пересадок',
    ONE: 'Одна пересадка',
    TWO: 'Две пересадки',
    THREE: 'Три пересадки'
}
export const OptionsOfNumberTransfersList = Object.keys(OptionsOfNumberTransfers).map((option) => ({
    name: option,
    label: OptionsOfNumberTransfers[option],
}));