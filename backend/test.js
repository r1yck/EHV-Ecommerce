const moment = require('moment'); // Certifique-se de importar o `moment`

// Função de calcular idade (copie aqui a mesma função)
const calculateAge = (birthDate) => {
    const age = moment().diff(moment(birthDate, 'YYYY-MM-DD'), 'years');
    return age;
};

// Teste de exemplo
const testCases = [
    { birthDate: '2005-12-11', expectedAge: 19 },
    { birthDate: '2000-12-10', expectedAge: 24 },
    { birthDate: '1995-07-09', expectedAge: 29 },
];

testCases.forEach(({ birthDate, expectedAge }) => {
    const calculatedAge = calculateAge(birthDate);
    console.log(`Data: ${birthDate}, Idade Esperada: ${expectedAge}, Calculada: ${calculatedAge}`);
});
