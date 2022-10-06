import styled from 'styled-components'
import {ReactComponent as ExternalLink} from './external-link.svg'

const Footer = () => {
  return (
    <Wrapper>
      <PersonalCredits>
        Made by&nbsp;
        <NameLink href="https://twitter.com/kamalnrf">
          Kamal
          <ExternalLink />
        </NameLink>
        &nbsp;
      </PersonalCredits>
      <PersonalCredits>
        and&nbsp;
        <NameLink href="https://twitter.com/vishalxk_">
          Vishal
          <ExternalLink />
        </NameLink>
      </PersonalCredits>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  position: fixed;
  bottom: 24px;
  right: 32px;
`

const PersonalCredits = styled.p`
  display: flex;
`

const NameLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
`

export {Footer}
