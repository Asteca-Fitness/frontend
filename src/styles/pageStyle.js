import styled from 'styled-components'

export const HeaderPage = styled.div`
display: flex;
position: fixed;
top: 0;
justify-content: space-between;
padding: 1rem;
background: ${props => props.theme.colors.tab};
width: 100%;
text-align: center;
ul {
	list-style: none;
	display: flex;
	justify-content: center;
}
h1 {
	color: ${props => props.theme.colors.primary};
}
li {
	padding: 1rem;
}
li:hover, li:active, li:focus{
	cursor: pointer;
	color: ${props => props.theme.colors.primary};
}
`
export const FooterPage = styled.div`
bottom: 0;
position: absolute;
justify-content: center;
display: flex;
padding: 1rem;
width: 100%;
background-color:${props => props.theme.colors.text};
`

export const PageContent = styled.div`
justify-content: center;
margin-top: 10rem;

display: block;

`