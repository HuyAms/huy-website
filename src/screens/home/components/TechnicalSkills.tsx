import React from 'react'
import HeaderText from '../../../components/HeaderText/HeaderText'
import {
	TechnicalSkillsContainer,
	TechnicalSkillsImage,
	TechnicalSkillsWrapper,
} from './style'
import IconReact from '../../../assets/react.png'
import IconNodeJS from '../../../assets/nodejs.svg'
import IconWordpress from '../../../assets/wordpress.svg'
import IconTypescript from '../../../assets/typescript.png'
import IconJavascript from '../../../assets/javascript.png'
import IconHtml from '../../../assets/html.png'
import IconCss from '../../../assets/css.png'
import IconSwift from '../../../assets/swift.png'
import IconIos from '../../../assets/ios.png'
import IconAndroid from '../../../assets/android.png'
import IconKotlin from '../../../assets/kotlin.png'
import IconJava from '../../../assets/java.png'

const TechnicalSkills = () => {
	return (
		<TechnicalSkillsWrapper>
			<HeaderText
				heading={'Technical Skills'}
				subheading={
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis cursus lectus ac suscipit. Phasellus vel risus tincidunt, eleifend leo.'
				}
			/>
			<TechnicalSkillsContainer>
				<TechnicalSkillsImage src={IconReact} alt="" />
				<TechnicalSkillsImage src={IconNodeJS} alt="" />
				<TechnicalSkillsImage src={IconWordpress} alt="" />
				<TechnicalSkillsImage src={IconTypescript} alt="" />
				<TechnicalSkillsImage src={IconJavascript} alt="" />
				<TechnicalSkillsImage src={IconHtml} alt="" />
				<TechnicalSkillsImage src={IconCss} alt="" />
				<TechnicalSkillsImage src={IconSwift} alt="" />
				<TechnicalSkillsImage src={IconIos} alt="" />
				<TechnicalSkillsImage src={IconAndroid} alt="" />
				<TechnicalSkillsImage src={IconKotlin} alt="" />
				<TechnicalSkillsImage src={IconJava} alt="" />
			</TechnicalSkillsContainer>
		</TechnicalSkillsWrapper>
	)
}

export default TechnicalSkills
