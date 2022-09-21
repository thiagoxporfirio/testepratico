
const btnExecutar1 = document.querySelector('.btnRealizarTeste1')
const btnExecutar2 = document.querySelector('.btnRealizarTeste2')
const btnExecutar3 = document.querySelector('.btnRealizarTeste3')
const btnExecutar4 = document.querySelector('.btnRealizarTeste4')
const btnExecutar5 = document.querySelector('.btnRealizarTeste5')


if(btnExecutar1){
 
    btnExecutar1.addEventListener('click', () => {

        const INDICE = 13
        var SOMA = 0
        var K = 0

        if(K < INDICE){
            K = K + 1
            SOMA = SOMA + K

            console.log(SOMA)
        }

    }) 

    
}

if(btnExecutar2){

    btnExecutar2.addEventListener('click', () => {
        
        var N = parseInt(prompt('Digite a quantidade de termos:'))

        var t1 = 1
        var t2 = 1

        for(cont = 2; cont <= N; cont ++){

            if(cont == 1 || cont == 2){
                console.log('1')
            }else{
                tn = t1 + t2
                console.log(JSON.stringify(tn))

                t1 = t2
                t2 = tn
            }
        }
    })
}


if(btnExecutar3){

    btnExecutar3.addEventListener('click', () => {

            var valorDiario = [{
                "dia": 1,
                "valor": 22174.1664
            },
            {
                "dia": 2,
                "valor": 24537.6698
            },
            {
                "dia": 3,
                "valor": 26139.6134
            },
            {
                "dia": 4,
                "valor": 0.0
            },
            {
                "dia": 5,
                "valor": 0.0
            },
            {
                "dia": 6,
                "valor": 26742.6612
            },
            {
                "dia": 7,
                "valor": 0.0
            },
            {
                "dia": 8,
                "valor": 42889.2258
            },
            {
                "dia": 9,
                "valor": 46251.174
            },
            {
                "dia": 10,
                "valor": 11191.4722
            },
            {
                "dia": 11,
                "valor": 0.0
            },
            {
                "dia": 12,
                "valor": 0.0
            },
            {
                "dia": 13,
                "valor": 3847.4823
            },
            {
                "dia": 14,
                "valor": 373.7838
            },
            {
                "dia": 15,
                "valor": 2659.7563
            },
            {
                "dia": 16,
                "valor": 48924.2448
            },
            {
                "dia": 17,
                "valor": 18419.2614
            },
            {
                "dia": 18,
                "valor": 0.0
            },
            {
                "dia": 19,
                "valor": 0.0
            },
            {
                "dia": 20,
                "valor": 35240.1826
            },
            {
                "dia": 21,
                "valor": 43829.1667
            },
            {
                "dia": 22,
                "valor": 18235.6852
            },
            {
                "dia": 23,
                "valor": 4355.0662
            },
            {
                "dia": 24,
                "valor": 13327.1025
            },
            {
                "dia": 25,
                "valor": 0.0
            },
            {
                "dia": 26,
                "valor": 0.0
            },
            {
                "dia": 27,
                "valor": 25681.8318
            },
            {
                "dia": 28,
                "valor": 1718.1221
            },
            {
                "dia": 29,
                "valor": 13220.495
            },
            {
                "dia": 30,
                "valor": 8414.61
            }]
        
            const valorMenor = valorDiario.reduce(function(prev, current) {
                    
                return (prev.valor < current.valor)  ? prev : current
            })
            console.log(valorMenor)

            setTimeout(() => {
                    
                const valorMaior = valorDiario.reduce(function(prev, current) {
                    
                    return (prev.valor > current.valor)  ? prev : current
                })

            console.log(valorMaior)

            }, 1200)


            setTimeout(() => {

                const valoresdoArray = valorDiario.filter(valores => valores.valor).map(valor => valor.valor)
                
                

                const valorTotal = valoresdoArray.reduce(function(soma, i) {
                    
                    return (soma + i)
                })
                
                const valorX =  valorTotal / 21
                console.log('Media mensal '+ valorX)

                const valueFinal = valorDiario.filter(p => p.valor >= valorX)
                console.log(valueFinal)
                        
            }, 1300)
            
         
            
            
        })
}


if(btnExecutar4){
 
    btnExecutar4.addEventListener('click', () => {

       let sp = 67.83643
       let rj = 36.67866
       let mg = 29.22988
       let es = 27.16548
       let out = 19.84953

       let total = sp + rj + mg + es + out
       console.log('Valor total da soma ' + total)

       let psp = sp/total *100
       let prj = rj/total *100
       let pmg = mg/total *100
       let pes = es/total *100
       let pout = out/total *100

       console.log('Porcentagem de SP ' + parseInt(psp) +'%')
       console.log('Porcentagem de RJ ' + parseInt(prj) +'%')
       console.log('Porcentagem de MG ' + parseInt(pmg) +'%')
       console.log('Porcentagem de ES ' + parseInt(pes) +'%')
       console.log('Porcentagem de Outros ' + parseInt(pout) +'%')

    }) 

    
}


if(btnExecutar5){

    btnExecutar5.addEventListener('click', () => {
        

        function reverseString(str) {
            var newString = ""

            for (var i = str.length - 1; i >= 0; i--) {
                newString += str[i];
            }
            return newString;
        }
        console.log(reverseString('Thiago Porfirio'));
        
    })
}