export const getGeneroForDisplay = (genero) => {
    switch (genero) {
        case 0:
            return 'Femenino';
        case 1:
            return 'Masculino';
        default:
            return 'Indefinido';
    }
}