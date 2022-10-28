// Variáveis
const addSkill = document.getElementById('add')
const removeSkill = document.getElementById('remove')
const submit = document.getElementById('submit')
const developers = []
let inputRows = 0


// Eventos e Funções
addSkill.addEventListener('click', function () {
    const rowIndex = inputRows
    inputRows++

    const tecnologies = document.getElementById('techSkills')

    const inputTechSkills = document.createElement('input')
    inputTechSkills.className = 'form-control mt-4'
    inputTechSkills.id = 'inputRow-' + rowIndex
    inputTechSkills.value = ''
    inputTechSkills.type = 'text'
    inputTechSkills.name = 'technology'
    inputTechSkills.placeholder = 'Insira uma tecnologia que você utiliza:'
    inputTechSkills.ariaLabel = 'input-tech-skill'


    const workedTimeUl = document.createElement('ul')
    workedTimeUl.className = 'form-check d-flex mt-2'
    


        const upTwoYearsLi = document.createElement('li')
                upTwoYearsLi.className = 'form-check'
                upTwoYearsLi.id = 'checkboxRow' + rowIndex + '.1'
        const upTwoYearsCheckbox = document.createElement('input')
                upTwoYearsCheckbox.type = 'radio'
                upTwoYearsCheckbox.className = 'form-check-input'
                upTwoYearsCheckbox.name = 'expTimeTech'
                upTwoYearsCheckbox.value = '0-2 anos'
                upTwoYearsCheckbox.id = 'expCheckbox-' + rowIndex + '.1'
        const upTwoYearsLabel = document.createElement('label')
                upTwoYearsLabel.className = 'text-light'
                upTwoYearsLabel.htmlFor = 'expCheckbox-' + rowIndex + '.1'
                upTwoYearsLabel.innerText = '0-2 anos'
        upTwoYearsLi.append(upTwoYearsCheckbox, upTwoYearsLabel)
        workedTimeUl.appendChild(upTwoYearsLi)

        const untilFourYearsLi = document.createElement('li')
                untilFourYearsLi.className = 'form-check ms-3'
                untilFourYearsLi.id = 'checkboxRow-' + rowIndex + '.2'
        const untilFourYearsCheckbox = document.createElement('input')
                untilFourYearsCheckbox.type = 'radio'
                untilFourYearsCheckbox.className = 'form-check-input'
                untilFourYearsCheckbox.name = 'expTimeTech'
                untilFourYearsCheckbox.value = '3-4 anos'
                untilFourYearsCheckbox.id = 'expCheckbox-' + rowIndex + '.2'
        const untilFourYearsLabel = document.createElement('label')
                untilFourYearsLabel.className = 'text-light'
                untilFourYearsLabel.htmlFor = 'expCheckbox-' + rowIndex + '.2'
                untilFourYearsLabel.innerText = '3-4 anos'
        untilFourYearsLi.append(untilFourYearsCheckbox, untilFourYearsLabel)
        workedTimeUl.appendChild(untilFourYearsLi)

        const fiveOrMoreYearsLi = document.createElement('li')
                fiveOrMoreYearsLi.className = 'form-check ms-3 me-4'
                fiveOrMoreYearsLi.id = 'checkboxRow' + rowIndex + '.3'
        const fiveOrMoreYearsCheckbox = document.createElement('input')
                fiveOrMoreYearsCheckbox.type = 'radio'
                fiveOrMoreYearsCheckbox.className = 'form-check-input'
                fiveOrMoreYearsCheckbox.name = 'expTimeTech'
                fiveOrMoreYearsCheckbox.value = '5 + anos'
                fiveOrMoreYearsCheckbox.id = 'expCheckbox-' + rowIndex + '.3'
        const fiveOrMoreYearsLabel = document.createElement('label')
                fiveOrMoreYearsLabel.className = 'text-light'
                fiveOrMoreYearsLabel.htmlFor = 'expCheckbox-' + rowIndex + '.3'
                fiveOrMoreYearsLabel.innerText = '5 + anos'
        fiveOrMoreYearsLi.append(fiveOrMoreYearsCheckbox, fiveOrMoreYearsLabel)
        workedTimeUl.appendChild(fiveOrMoreYearsLi)

        const removeBtn = document.createElement('button')
            removeBtn.type = 'button'
            removeBtn.className = 'btn btn-outline-danger text-center'
            removeBtn.innerText = 'Remover'
            removeBtn.addEventListener('click', function (){
                tecnologies.removeChild(inputTechSkills)
                tecnologies.removeChild(workedTimeUl)
                tecnologies.removeChild(removeBtn)
            })
    
        tecnologies.append(inputTechSkills, workedTimeUl, removeBtn)
})