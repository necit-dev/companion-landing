const usersObjects = [
	{
		id: 1,
		name: "Таня Фирсова",
		avatarUrl: './img/users/firsova.jpg',
		hashtags: [
			"ЗОЖ",
			"ПП",
			"Фитнес",
			"пляж",
			"авокадо",
			"смузи",
		],
		countries: [
			{
				name: "Шри-Ланка",
				src: "./img/countries/SriLanka.png",
			},
			{
				name: "Таиланд",
				src: "./img/countries/Thailand.png",
			},
			{
				name: "Сейшелы",
				src: "./img/countries/Seychelles.png",
			}
		],
		likes: 1500000,
		transports: {
			plane: true,
			bus: false,
			bike: false,
			run: false
		},
		level: 99,
		status: "offline" // "offline", "online" or "busy"
	}, {
		id: 2,
		name: "Петя Демин",
		avatarUrl: './img/users/demin.jpg',
		hashtags: [
			"бургер",
			"бар",
			"футбол",
			"концерт",
			"крафт",
		],
		countries: [
			{
				name: "Бельгия",
				src: "./img/countries/Belgium.png",
			},
			{
				name: "Чехия",
				src: "./img/countries/Czech.png",
			}
		],
		likes: 1500,
		transports: {
			plane: true,
			bus: true,
			bike: false,
			run: true
		},
		level: 80,
		status: "busy" // "offline", "online" or "busy"
	}, {
		id: 3,
		name: "Марк Смолов",
		avatarUrl: './img/users/smolov.jpg',
		hashtags: [
			"рэп",
			"тату",
			"хайпбист",
			"кроссовки",
			"суприм",
		],
		countries: [
			{
				name: "США",
				src: "./img/countries/USA.png",
			},
			{
				name: "Австралия",
				src: "./img/countries/Australia.png",
			},
			{
				name: "Доминика",
				src: "./img/countries/Dominica.png",
			}
		],
		likes: 170,
		transports: {
			plane: true,
			bus: false,
			bike: true,
			run: false
		},
		level: 25,
		status: "busy" // "offline", "online" or "busy"
	}, {
		id: 4,
		name: "Лариса Роговая",
		avatarUrl: './img/users/rogovaya.jpg',
		hashtags: [
			"образование",
			"карьера",
			"учеба",
			"линкедин",
		],
		countries: [
			{
				name: "Великобритания",
				src: "./img/countries/UK.png",
			},
			{
				name: "Германия",
				src: "./img/countries/Germany.png",
			}
		],
		likes: 23,
		transports: {
			plane: true,
			bus: true,
			bike: false,
			run: false
		},
		level: 50,
		status: "online" // "offline", "online" or "busy"
	}
]

const accordions = document.querySelectorAll(".form__accordion")
const submit_btn = document.querySelector(".form__btn")

accordions.forEach(accordion => {
	const acc_content = accordion.querySelector('.form__accordion-content')
	const acc_btn = accordion.querySelector('.form__accordion-opener')
	acc_btn.addEventListener('click', () => {
		if (acc_content.classList.contains('form__accordion-content--opened')){
			acc_content.classList.remove('form__accordion-content--opened')
			acc_content.setAttribute('inert', '')
			acc_content.dataset.isinert = 'true'
			acc_btn.setAttribute('aria-expanded', 'false')
		}else {
			acc_content.classList.add('form__accordion-content--opened')
			acc_content.dataset.isinert = 'false'
			acc_content.removeAttribute('inert')
			acc_btn.setAttribute('aria-expanded', 'true')
		}
	})
})

const users = document.querySelector('.users')

users.addEventListener('click', (e) => {
	const say = e.target.closest('.user__btn')
	const like = e.target.closest('.user__like-btn')
	const user = e.target.closest('.user')
	console.log(user.dataset.id);
	if (say) {
		const name = user.querySelector('.user__name')
		alert(`Вы позвали пользователя: ${name.textContent}`)
	}
	if (like) {
		const like_field = user.querySelector('.user__like')

		if (like_field.classList.contains('user__like--active')) {
			like_field.classList.remove('user__like--active')
		}else {
			like_field.classList.add('user__like--active')
		}
	}
})

const addUsers = (usersList) => {
	const html = usersList.map((item) => `
		<article class="user" data-id="${item.id}">
			<img src="${item.avatarUrl}" alt="${item.name}" class="user__photo"/>
			<div class="user__primary">
				<div class="user__status${status !== "offline" && ` user__status--${item.status}`}"></div>
				<h2 class="user__name" title="${item.name}">${item.name}</h2>
			</div>
			<div class="user__hashtags">
				${item.hashtags.map(hashtag => `
					<div class="user__hashtag">#${hashtag}</div>					
				`).join('')}
			</div>
			<div class="user__countries">
				${item.countries.map(country => `
				<div class="user__country">
					<img src="${country.src}" alt="${country.name}" class="user__country-img"/>
					<div class="user__country-name">${country.name}</div>
				</div>
				`).join('')}
			</div>
			<button class="user__btn btn">Позвать!</button>
			<div class="user__like">
				<button class="user__like-btn">
					<svg>
						<use xlink:href="#like"></use>
					</svg>
				</button>
				<div class="user__like-count">${item.likes > 999999 ? `${Math.floor(item.likes/1000000)},${Math.floor(item.likes%1000000 / 100000)} M`: item.likes}</div>
			</div>
			<div class="user__transports">
				<div class="user__transport ${item.transports.plane && "user__transport--active"}">
					<img src="./img/icons/icon_plane.svg" alt="Самолет" class="user__transport-plane"/>
				</div>
				<div class="user__transport ${item.transports.bus && "user__transport--active"}">
					<img src="./img/icons/icon_bus.svg" alt="Автобус" class="user__transport-bus"/>
				</div>
				<div class="user__transport ${item.transports.bike && "user__transport--active"}">
					<img src="./img/icons/icon_bicycle.svg" alt="Велосипед" class="user__transport-bike"/>
				</div>
				<div class="user__transport ${item.transports.run && "user__transport--active"}">
					<img src="./img/icons/icon_run.svg" alt="Бег" class="user__transport-run"/>
				</div>
			</div>
			<div class="user__level circle" style="--size: 64px; --thickness: 3px; --percent: ${item.level >= 97 && item.level < 100 ? 97 : item.level}; --color: #ff8d30">
				<svg>
					<circle class="circle__element" cx="50%" cy="50%" r="calc(50% - var(--thickness) / 2)"/>
				</svg>
				<div class="user__level-info">
					<div class="user__level-number">${item.level}</div>
					<div class="user__level-text">level</div>
				</div>
			</div>
		</article>
		`
	).join('\n')
	if (html.length > 0)
		users.insertAdjacentHTML('beforeend', html)
	else users.insertAdjacentHTML('beforeend', `<h2 style="text-align: center; margin-top: 20px;">Список пользователей пуст</h2>`)
}

addUsers(usersObjects)

submit_btn.addEventListener('click', () => {
	const formData = {}
	accordions.forEach(accordion => {
		const acc_name = accordion.dataset.accordion;
		let acc_obj;
		if (accordion.dataset.accordion === "level") {
			acc_obj = {}
			const steppers = accordion.querySelectorAll('.form__stepper-input')
			steppers.forEach(stepper => {
				acc_obj[stepper.name] = parseInt(stepper.value)
			})
		} else if (accordion.dataset.accordion === "transport") {
			acc_obj = {}
			const checkboxes = accordion.querySelectorAll('.form__checkbox>input')
			checkboxes.forEach(checkbox => {
				acc_obj[checkbox.name] = checkbox.checked
			})
		}

		else {
			acc_obj = []
			const checkboxes = accordion.querySelectorAll('.form__checkbox')
			checkboxes.forEach(checkbox => {
				const cb = checkbox.querySelector('.form__real-checkbox')
				if (cb.checked){
					const name = checkbox.querySelector('.form__checkbox-text').textContent
					acc_obj.push(name)
				}
			})
		}
		formData[acc_name] = acc_obj;
	})
	console.log(formData);
	// Transport Filter
	let filteredUsers;
	const transportFilterIsEmpty = Object.values(formData.transport).every(val => val === false)
	if (!transportFilterIsEmpty) {
		filteredUsers = usersObjects.filter(user => (
			Object.entries(formData.transport).some(([key, value]) => {
				return value === true && user.transports[key] === true
			})
		))
	}else {
		filteredUsers = usersObjects;
	}
	// Level Filter
	filteredUsers = filteredUsers.filter(user => {
		return formData.level.min <= user.level && formData.level.max >= user.level;
	})
	// Music Filters
	Object.entries(formData).forEach(([key, value]) => {
		if (key === "transport" || key === "level") return
		const filterIsEmpty = value.length === 0
		if (!filterIsEmpty) {
			filteredUsers = filteredUsers.filter(user => {
				for (const elem of value) {
					for (const hashtag of user.hashtags) {
						if (hashtag.toLowerCase() === elem.toLowerCase()) {
							return true
						}
					}
				}
				return false;
			})
		}
		console.log(`key=${key}`, filteredUsers);
	})

	console.log(filteredUsers);
	users.replaceChildren();
	addUsers(filteredUsers);
})


// Double slider - start

const sliderMin = document.querySelector('.form__slider--min')
const sliderMax = document.querySelector('.form__slider--max')
const sliderTrack = document.querySelector('.form__slider-track')
const minGap = 0;

const stepperMin = document.querySelector('.form__stepper-input--min')
const stepperMax = document.querySelector('.form__stepper-input--max')


const fillColor = () => {
	let percent1 = (sliderMin.value / sliderMin.max)*100
	let percent2 = (sliderMax.value / sliderMax.max)*100
	sliderTrack.style.background = `linear-gradient(to right, #1d2e5b33 ${percent1}% , var(--color-blue-light) ${percent1}% , var(--color-blue-light) ${percent2}%, #1d2e5b33 ${percent2}%)`;
}

const slideMin = () => {
	if (parseInt(sliderMax.value) - parseInt(sliderMin.value) <= minGap){
		sliderMin.value = parseInt(sliderMax.value) - minGap;
	}
	stepperMin.value = parseInt(sliderMin.value)
	if (parseInt(sliderMin.value) > 50) {
		sliderMin.style.zIndex = "100";
	}else {
		sliderMin.style.zIndex = "1";
	}
	fillColor()
}

const slideMax = () => {
	if (parseInt(sliderMax.value) - parseInt(sliderMin.value) <= minGap) {
		sliderMax.value = parseInt(sliderMin.value) + minGap;
	}
	stepperMax.value = parseInt(sliderMax.value)
	if (parseInt(sliderMax.value) < 50) {
		sliderMax.style.zIndex = "100";
	}else {
		sliderMax.style.zIndex = "1";
	}
	fillColor();
}

sliderMin.addEventListener('input', slideMin)
sliderMax.addEventListener('input', slideMax)

stepperMin.addEventListener('change', (e) => {
	let val = parseInt(e.target.value)
	let maxVal = parseInt(sliderMax.value)
	console.log("val: ", val);
	console.log("maxVal: ", maxVal);
	if (val < 0)val = 0;
	if (val > 100) val = 100;
	if (val > maxVal) {
		maxVal = val;
	}
	if (val > 50) {
		sliderMin.style.zIndex = "100";
	}else {
		sliderMin.style.zIndex = "1";
	}

	stepperMin.value = val;
	stepperMax.value = maxVal;
	sliderMin.value = val;
	sliderMax.value = maxVal;
	fillColor()
})

stepperMax.addEventListener('change', (e) => {
	let val = parseInt(e.target.value)
	let minVal = parseInt(sliderMin.value)
	if (val < 0) val = 0;
	if (val > 100) val = 100;
	if (val < minVal) {
		minVal = val;
		stepperMin.value = minVal;
		stepperMax.value = minVal;
	}
	if (val < 50) {
		sliderMax.style.zIndex = "100";
	}else {
		sliderMax.style.zIndex = "1";
	}
	stepperMin.value = minVal;
	stepperMax.value = val;
	sliderMin.value = minVal;
	sliderMax.value = val;
	fillColor()
})

fillColor()

const acc_contents = document.querySelectorAll('.form__accordion-content')
const mediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1400px)');

const toggleInert = (e) => {
	acc_contents.forEach((item) => {
		if (e.matches) {
			item.removeAttribute('inert');
		}else {
			const wasInert = item.dataset.isinert === 'true';
			if (wasInert) {
				item.setAttribute('inert', '');
			}else {
				item.removeAttribute('inert');
			}
		}
	});
}

toggleInert(mediaQuery);

mediaQuery.addEventListener('change', toggleInert)

