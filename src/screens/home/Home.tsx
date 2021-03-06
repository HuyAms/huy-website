import React from 'react'
import {RouteComponentProps} from '@reach/router'
import {connect} from 'react-redux'
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills'
import Resume, {ResumeItem} from './components/Resume/Resume'
import Fact from './components/Fact/Fact'
import Contact from './components/Contact/Contact'
import Banner from '../../components/Banner/Banner'
import {getHomeContent} from '../../store/homeScreenReducer'
import PageSpinner from '../../components/Spinner/PageSpinner'

interface Props extends RouteComponentProps {
	getHomeContent: () => any
	homeScreen
}

const Home: React.FC<Props> = ({getHomeContent, homeScreen}) => {
	React.useEffect(() => {
		if (!homeScreen.data) {
			getHomeContent()
		}
	}, [homeScreen.data])

	const renderHomePage = () => {
		if (homeScreen.isLoading || !homeScreen.data) {
			return <PageSpinner />
		}

		// Banner
		const homeBannerData = homeScreen.data.hero.fields

		// Technical skills
		const technicalSkillsData = homeScreen.data.sections[0].fields
		const techincalSkillImgs = technicalSkillsData.images.map(
			image => image.fields.file.url,
		)

		// Experience
		const workExpData = homeScreen.data.sections[1].fields
		const educationExpData = homeScreen.data.sections[2].fields

		const resumeData: ResumeItem[] = [workExpData, educationExpData].map(
			data => {
				return {
					heading: data.heading,
					workExps: data.experiences.map(exp => ({
						title: exp.fields.title,
						subtitle: exp.fields.subtitle,
						description: exp.fields.description,
						start: exp.fields.start,
						end: exp.fields.end,
					})),
				}
			},
		)

		// Fun Fact
		const funFactData = homeScreen.data.sections[3].fields

		// Contact
		const contactData = homeScreen.data.sections[4].fields

		return (
			<>
				<Banner
					text={homeBannerData.heading}
					imageUrl={homeBannerData.image.fields.file.url}
				/>
				<TechnicalSkills
					heading={technicalSkillsData.heading}
					subheading={technicalSkillsData.description}
					imgSources={techincalSkillImgs}
				/>
				<Resume resumeItems={resumeData} />
				<Fact
					heading={funFactData.heading}
					content={funFactData.description}
					imageUrl={funFactData.image.fields.file.url}
				/>
				<Contact
					address={contactData.address}
					email={contactData.email}
					phoneNumber={contactData.phone}
					heading={contactData.heading}
					socialMedia={contactData.socialMedia}
					mapUrl={contactData.mapUrl}
				/>
			</>
		)
	}

	return <>{renderHomePage()}</>
}

const mapStateToProps = ({homeScreen}) => {
	return {homeScreen}
}

const mapDispatchToProps = {
	getHomeContent,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
