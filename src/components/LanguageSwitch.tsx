import { useTranslation } from 'react-i18next'

const LanguageSwitch = () => {
    const { i18n } = useTranslation()

    const flagsStyle = { width: '33px', height: '26px', marginTop: '4px' }
    const defaultLang = i18n.language === 'en'

    return (
        <label id="theme-toggle-button" className="">
            <input
                type="checkbox"
                id="toggle"
                checked={defaultLang}
                onChange={() => {
                    i18n.changeLanguage(defaultLang ? 'fr' : 'en')
                }}
            />
            <div id="switch-language" className="flex">
                <svg
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    style={flagsStyle}
                    className={`fr-flag ${
                        defaultLang ? 'hidden-animation' : 'active'
                    }`}
                >
                    <mask id="circleFlagsFr0">
                        <circle cx="256" cy="256" r="256" fill="#fff" />
                    </mask>
                    <g mask="url(#circleFlagsFr0)">
                        <path
                            fill="#eee"
                            d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"
                        />
                        <path fill="#0052b4" d="M0 0h167v512H0z" />
                        <path fill="#d80027" d="M345 0h167v512H345z" />
                    </g>
                </svg>
                <svg
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    style={flagsStyle}
                    className={`en-flag ${
                        defaultLang ? 'active' : 'hidden-animation'
                    }`}
                >
                    <mask id="circleFlagsGb0">
                        <circle cx="256" cy="256" r="256" fill="#fff" />
                    </mask>
                    <g mask="url(#circleFlagsGb0)">
                        <path
                            fill="#eee"
                            d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"
                        />
                        <path
                            fill="#0052b4"
                            d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"
                        />
                        <path
                            fill="#d80027"
                            d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z"
                        />
                    </g>
                </svg>
            </div>
        </label>
    )
}

export default LanguageSwitch
