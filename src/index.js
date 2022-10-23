const addSkill = document.getElementById('add')
const removeSkill = document.getElementById('remove')
const submit = document.getElementById('submit')

addSkill.addEventListener('click', function () {

    const tecnologies = document.getElementById('techSkills')

    const inputTechSkills = document.createElement('input')
    inputTechSkills.className = 'form-control mt-3'
    inputTechSkills.type = 'text'
    inputTechSkills.name = 'fullname'
    inputTechSkills.placeholder = 'Insira uma tecnologia que você utiliza:'
    inputTechSkills.ariaLabel = 'default input example'
    tecnologies.appendChild(inputTechSkills)

    const workedTimeUl = document.createElement('ul')
    workedTimeUl.className = 'form-check d-flex mt-2'


        const upTwoYearsLi = document.createElement('li')
        upTwoYearsLi.className = 'form-check'
        upTwoYearsLi.innerHTML = '<input type="checkbox" class="form-check-input" value=""  id="exampleCheck1">'
        const upTwoYearsLabel = document.createElement('label')
        upTwoYearsLabel.className = 'text-light'
        upTwoYearsLabel.innerText = '0-2 anos'
        upTwoYearsLi.appendChild(upTwoYearsLabel)
        workedTimeUl.appendChild(upTwoYearsLi)

        const untilFourYearsLi = document.createElement('li')
        untilFourYearsLi.className = 'form-check ms-3'
        untilFourYearsLi.innerHTML = '<input type="checkbox" class="form-check-input" value=""  id="exampleCheck1">'
        const untilFourYearsLabel = document.createElement('label')
        untilFourYearsLabel.className = 'text-light'
        untilFourYearsLabel.innerText = '3-4 anos'
        untilFourYearsLi.appendChild(untilFourYearsLabel)
        workedTimeUl.appendChild(untilFourYearsLi)

        const fiveOrMoreYearsLi = document.createElement('li')
        fiveOrMoreYearsLi.className = 'form-check ms-3 me-4'
        fiveOrMoreYearsLi.innerHTML = '<input type="checkbox" class="form-check-input" value=""  id="exampleCheck1">'
        const fiveOrMoreYearsLabel = document.createElement('label')
        fiveOrMoreYearsLabel.className = 'text-light'
        fiveOrMoreYearsLabel.innerText = '5 + anos'
        fiveOrMoreYearsLi.appendChild(fiveOrMoreYearsLabel)
        workedTimeUl.appendChild(fiveOrMoreYearsLi)
    
        tecnologies.append(workedTimeUl)
})