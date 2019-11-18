import React from 'react'
import {
	HeaderWrapper,
	Navigation,
	StyledLink,
	SocialLinks,
	SocialLinkItem,
	LogoText,
	HeaderMobileWraper,
	MenuIcon,
	MobileNavigationOverLay,
	MobileNavigation,
	MobileSocialLinks,
	MobileSocialIcon,
	Icon,
} from './style'
import MenuCloseIcon from '../../assets/menu-close.svg'
import MenuOpenIcon from '../../assets/menu-open.svg'
import GithubIcon from '../../assets/github.svg'
import LinkedInIcon from '../../assets/linkedin.svg'
import MailIcon from '../../assets/email.png'
import {useWindowDimensions} from '../../utils/utils'
import {ScreenSizes} from '../../styles/utils'

const NavLink = (props: any) => (
	<StyledLink
		{...props}
		getProps={({isCurrent}) => {
			return {
				style: {
					color: isCurrent ? '#000000' : '#909090',
				},
			}
		}}
	/>
)

const Header: React.FunctionComponent = () => {
	const [navShow, setNavShow] = React.useState(false)
	const {width} = useWindowDimensions()

	const renderDesktopHeader = () => (
		<HeaderWrapper>
			<Navigation>
				<NavLink to="/">Welcome</NavLink>
				<NavLink to="/projects">Projects</NavLink>
				<NavLink to="/blogs">Blogs</NavLink>
			</Navigation>
			<LogoText to="/">Huy Trinh</LogoText>
			<SocialLinks>
				<SocialLinkItem href="https://github.com/HuyAms">Github</SocialLinkItem>
				<SocialLinkItem href="https://www.linkedin.com/in/huy-trinh-dinh-253534131/">
					LinkedIn
				</SocialLinkItem>
				<SocialLinkItem href="https://www.linkedin.com/in/huy-trinh-dinh-253534131/">
					Contact
				</SocialLinkItem>
			</SocialLinks>
		</HeaderWrapper>
	)

	const renderMobileHeader = () => (
		<HeaderMobileWraper>
			<LogoText to="/">Huy Trinh</LogoText>
			<MenuIcon
				onClick={() => setNavShow(true)}
				src={MenuOpenIcon}
				alt="Menu icon"
			/>
			<MobileNavigationOverLay isShow={navShow}>
				<MenuIcon
					onClick={() => setNavShow(false)}
					src={MenuCloseIcon}
					alt="Menu icon"
				/>
				<MobileNavigation>
					<NavLink to="/">Welcome</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/blogs">Blogs</NavLink>
				</MobileNavigation>
				<MobileSocialLinks>
					<MobileSocialIcon href="">
						<Icon src={GithubIcon} />
					</MobileSocialIcon>
					<MobileSocialIcon href="">
						<Icon src={LinkedInIcon} />
					</MobileSocialIcon>
					<MobileSocialIcon href="">
						<Icon src={MailIcon} />
					</MobileSocialIcon>
				</MobileSocialLinks>
			</MobileNavigationOverLay>
		</HeaderMobileWraper>
	)

	return (
		<>
			{width <= ScreenSizes.tabPort
				? renderMobileHeader()
				: renderDesktopHeader()}
		</>
	)
}

export default Header