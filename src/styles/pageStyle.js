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
li:hover {
	cursor: pointer;
}
`
export const FooterPage = styled.div`
bottom: 0;
position: absolute;
display: flex;
`

export const PageContent = styled.div`
width: 100%;
justify-content: center;
display: grid;
height: 1500px;
margin-top: 10rem;
`