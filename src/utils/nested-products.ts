/* eslint-disable no-console */

export const nestedProduct = () => {
	const nestDiv = document.querySelector('.nested-src')
	if (nestDiv) {
		const allSlugLists = document.querySelectorAll('[fs-cmsnest-element="slugs"]')
		allSlugLists.forEach((list) => {
			// const currentTypeOfEl = list.getAttribute('fs-cmsnest-collection');
			const currentListValue = list.textContent

			if (currentListValue != '') {
				const currentAppendWaiter = list.parentNode
				const arrayForValues = currentListValue.split(',')
				arrayForValues.forEach((el) => {
					el = el.replace(/\s+/g, '')
					const findClonableEl = document.querySelector('[nest-by-name-item="' + el + '"]')
					if (findClonableEl) {
						const findClonableElAdditional = findClonableEl.cloneNode(true)
						currentAppendWaiter.appendChild(findClonableElAdditional)
					}
				})
			}
		})

		// document.querySelectorAll('.button.is-solution')[0].click();

		const allCaseStudyLink = document.querySelectorAll(
			'.clw_section_solutions-content .case-study-link div'
		)
		allCaseStudyLink.forEach((link) => {
			const currentHrefValue = link.getAttribute('href')
			const closestParentCli = link.closest('[current-client-type-slug]')
			const currentClientTypeSlug = closestParentCli.getAttribute('current-client-type-slug')

			// Создаем новый элемент <a> вместо div
			const newLink = document.createElement('a')

			// Копируем все атрибуты старого div
			Array.from(link.attributes).forEach((attr) => {
				newLink.setAttribute(attr.name, attr.value)
			})

			// Копируем внутреннее содержимое
			newLink.innerHTML = link.innerHTML

			// Устанавливаем href с заменой *
			newLink.setAttribute('href', currentHrefValue.replace(/\*/g, currentClientTypeSlug))

			// Заменяем старый div на новый a
			link.parentNode.replaceChild(newLink, link)
		})
	}
}
