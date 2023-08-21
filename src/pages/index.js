import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, LinkBox, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { BsArrowRightShort } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="88px 0 88px 0" min-height="100vh" quarkly-title="404-1">
			<Override slot="SectionContent" max-width="1220px" justify-content="center" />
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--primary">
					404
				</Text>
				<Text
					color="--dark"
					margin="8px 0px 16px 0px"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					font="--headline1"
					letter-spacing="-0.025em"
				>
					Page not found
				</Text>
				<Text
					lg-width="80%"
					font="--lead"
					color="--dark"
					margin="0px 0px 40px 0px"
					text-align="center"
				>
					Sorry, we couldn’t find the page you’re looking for.
				</Text>
				<Box display="grid" grid-template-columns="1fr 1fr" grid-gap="8px" sm-grid-template-columns="1fr">
					<Link
						font="--lead"
						padding="12px 24px 12px 24px"
						background="--color-primary"
						border-radius="8px"
						href="/"
						text-decoration-line="initial"
						color="--light"
						transition="--opacityOut"
						hover-opacity="0.7"
					>
						Go back to home
					</Link>
					<LinkBox
						flex-direction="row"
						padding="12px 6px 12px 8px"
						hover-background="--color-dark"
						hover-color="--light"
						transition="background-color --transitionDuration-normal --transitionTimingFunction-easeOut 0s"
						border-radius="8px"
					>
						<Text margin="0px 0px 0px 0px" font="--lead" color="inherit">
							Contact support{" "}
						</Text>
						<Icon category="bs" icon={BsArrowRightShort} size="24px" margin="4px 0px 0px 4px" />
					</LinkBox>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"64e3a8156efcea001ae5966d"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});