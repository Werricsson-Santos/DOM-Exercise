// Variáveis
const addSkill = document.getElementById('add')
const removeSkill = document.getElementById('remove')
const submit = document.getElementById('submit')
const form = document.getElementById('form-content')
const developers = []
let inputRows = 0


// Eventos e Funções
addSkill.addEventListener('click', function () {
        const technologies = document.getElementById('techSkills')

        const newRow = document.createElement('div')
        const rowIndex = inputRows
        inputRows++
        newRow.className = 'technologies'
        newRow.id = 'inputRow-' + rowIndex

        const inputTechSkills = document.createElement('input')
                inputTechSkills.className = 'formInputs form-control mt-4'
                inputTechSkills.id = 'inputRow-' + rowIndex
                inputTechSkills.name = 'techName'
                inputTechSkills.value = ''
                inputTechSkills.type = 'text'
                inputTechSkills.name = 'techName'
                inputTechSkills.placeholder = 'Insira uma tecnologia que você utiliza:'
                inputTechSkills.ariaLabel = 'input'


        const workedTimeUl = document.createElement('ul')
                workedTimeUl.className = 'form-check d-flex mt-2'



        const upTwoYearsLi = document.createElement('li')
                upTwoYearsLi.className = 'form-check'
                upTwoYearsLi.id = 'radioRow' + rowIndex + '.1'
        const upTwoYearsRadio = document.createElement('input')
                upTwoYearsRadio.type = 'radio'
                upTwoYearsRadio.className = 'formInputs form-check-input'
                upTwoYearsRadio.name = 'expTimeTech' + rowIndex
                upTwoYearsRadio.value = '0-2 anos'
                upTwoYearsRadio.id = 'inputRow-' + rowIndex + '.1'
        const upTwoYearsLabel = document.createElement('label')
                upTwoYearsLabel.className = 'text-light'
                upTwoYearsLabel.htmlFor = 'inputRow-' + rowIndex + '.1'
                upTwoYearsLabel.innerText = '0-2 anos'
        upTwoYearsLi.append(upTwoYearsRadio, upTwoYearsLabel)
        workedTimeUl.appendChild(upTwoYearsLi)

        const untilFourYearsLi = document.createElement('li')
                untilFourYearsLi.className = 'form-check ms-3'
                untilFourYearsLi.id = 'radioRow-' + rowIndex + '.2'
        const untilFourYearsRadio = document.createElement('input')
                untilFourYearsRadio.type = 'radio'
                untilFourYearsRadio.className = 'formInputs form-check-input'
                untilFourYearsRadio.name = 'expTimeTech' + rowIndex
                untilFourYearsRadio.value = '3-4 anos'
                untilFourYearsRadio.id = 'inputRow-' + rowIndex + '.2'
        const untilFourYearsLabel = document.createElement('label')
                untilFourYearsLabel.className = 'text-light'
                untilFourYearsLabel.htmlFor = 'inputRow-' + rowIndex + '.2'
                untilFourYearsLabel.innerText = '3-4 anos'
        untilFourYearsLi.append(untilFourYearsRadio, untilFourYearsLabel)
        workedTimeUl.appendChild(untilFourYearsLi)

        const fiveOrMoreYearsLi = document.createElement('li')
                fiveOrMoreYearsLi.className = 'form-check ms-3 me-4'
                fiveOrMoreYearsLi.id = 'radioRow' + rowIndex + '.3'
        const fiveOrMoreYearsRadio = document.createElement('input')
                fiveOrMoreYearsRadio.type = 'radio'
                fiveOrMoreYearsRadio.className = 'formInputs form-check-input'
                fiveOrMoreYearsRadio.name = 'expTimeTech' + rowIndex
                fiveOrMoreYearsRadio.value = '5 + anos'
                fiveOrMoreYearsRadio.id = 'inputRow-' + rowIndex + '.3'
        const fiveOrMoreYearsLabel = document.createElement('label')
                fiveOrMoreYearsLabel.className = 'text-light'
                fiveOrMoreYearsLabel.htmlFor = 'inputRow-' + rowIndex + '.3'
                fiveOrMoreYearsLabel.innerText = '5 + anos'
        fiveOrMoreYearsLi.append(fiveOrMoreYearsRadio, fiveOrMoreYearsLabel)
        workedTimeUl.appendChild(fiveOrMoreYearsLi)

        const removeBtn = document.createElement('button')
                removeBtn.type = 'button'
                removeBtn.className = 'btn btn-outline-danger mt-2 text-center'
                removeBtn.innerText = 'Remover'
                removeBtn.addEventListener('click', function (){
                        newRow.removeChild(inputTechSkills)
                        newRow.removeChild(workedTimeUl)
                        newRow.removeChild(removeBtn)
        })

        newRow.append(inputTechSkills, workedTimeUl, removeBtn)

        technologies.appendChild(newRow)
})


form.addEventListener('submit', function (ev) {
        ev.preventDefault()

        const fullnameInput = document.getElementById('fullname')
        const newRow = document.querySelectorAll('.technologies')


        let technologies = []
        newRow.forEach(function (newRow,) {
                
                const techName = document.querySelector('#' + newRow.id + ' input[name="techName"]').value
                const techExp = document.querySelector('#' + newRow.id + ' input[type="radio"]:checked').value
                technologies.push({ name: techName, exp: techExp})
        })

        const newDev = { fullname: fullnameInput.value, technologies: technologies }
        developers.push(newDev)
        alert('Dev cadastrado com sucesso!' + '\n Pressione F12 e veja o cadastro no console!')

        fullnameInput.value = ''
        newRow.forEach(function (newRow) {
                newRow.remove()
        })

        console.log(developers)
})