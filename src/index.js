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
    inputTechSkills.className = 'form-control mt-3'
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
        upTwoYearsLi.id = 'expCheckbox-' + rowIndex + '.1'
        upTwoYearsLi.innerHTML = '<input type="checkbox" class="form-check-input" value="0-2 anos" id="0-2">'
        const upTwoYearsLabel = document.createElement('label')
        upTwoYearsLabel.className = 'text-light'
        upTwoYearsLabel.htmlFor = '0-2'
        upTwoYearsLabel.innerText = '0-2 anos'
        upTwoYearsLi.appendChild(upTwoYearsLabel)
        workedTimeUl.appendChild(upTwoYearsLi)

        const untilFourYearsLi = document.createElement('li')
        untilFourYearsLi.className = 'form-check ms-3'
        untilFourYearsLi.id = 'expCheckbox-' + rowIndex + '.2'
        untilFourYearsLi.innerHTML = '<input type="checkbox" class="form-check-input" value="3-4 anos" id="3-4">'
        const untilFourYearsLabel = document.createElement('label')
        untilFourYearsLabel.className = 'text-light'
        untilFourYearsLabel.htmlFor = '3-4'
        untilFourYearsLabel.innerText = '3-4 anos'
        untilFourYearsLi.appendChild(untilFourYearsLabel)
        workedTimeUl.appendChild(untilFourYearsLi)

        const fiveOrMoreYearsLi = document.createElement('li')
        fiveOrMoreYearsLi.className = 'form-check ms-3 me-4'
        fiveOrMoreYearsLi.id = 'expCheckbox-' + rowIndex + '.3'
        fiveOrMoreYearsLi.innerHTML = '<input type="checkbox" class="form-check-input" value="5 + anos"  id="5 +">'
        const fiveOrMoreYearsLabel = document.createElement('label')
        fiveOrMoreYearsLabel.className = 'text-light'
        fiveOrMoreYearsLabel.htmlFor = '5 +'
        fiveOrMoreYearsLabel.innerText = '5 + anos'
        fiveOrMoreYearsLi.appendChild(fiveOrMoreYearsLabel)
        workedTimeUl.appendChild(fiveOrMoreYearsLi)
    
        tecnologies.append(inputTechSkills, workedTimeUl)
})



function removeTechSkill(){
    const tecnologies = document.getElementById('techSkills') 

    const inputTechSkills = document.getElementsByTagName('input')
    const workedTimeUl = document.getElementsByTagName('ul')

    tecnologies.removeChild(inputTechSkills[inputTechSkills.length - 1])
    tecnologies.removeChild(workedTimeUl[workedTimeUl.length -1])
}