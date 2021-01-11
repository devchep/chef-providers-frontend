export const parseData = () => {}

export const getStatusColorById = (statusId: number): string => {
    const orderStatusColor = ["#00BCB1", "#110EC2", "#646464"];
    return orderStatusColor[statusId]
}

export const getStatusButtonById = (statusId: number): string => {
    const orderStatusColor = ["#00BCB1", "изменить", "#646464"];
    return ''
}