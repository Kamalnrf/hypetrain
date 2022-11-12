import styled from 'styled-components'
import {ReactComponent as ExternalLinkForKamal} from '../../assets/external-link-kamal.svg'
import {ReactComponent as ExternalLinkForVishal} from '../../assets/external-link-vishal.svg'
import {ReactComponent as UnderlineForKamal} from '../../assets/underline-kamal.svg'
import {ReactComponent as UnderlineForVishal} from '../../assets/underline-vishal.svg'
import {QUERIES} from '../../constants'

type Props = {
  className?: string
}

const Footer = ({className}: Props) => {
  return (
    <Wrapper className={className}>
      <PersonalCredits>
        made by&nbsp;
        <NameLink href="https://twitter.com/kamalnrf">
          <Name>
            kamal
            <UnderlineForKamal />
          </Name>
          <ExternalLinkForKamal />
        </NameLink>
        &nbsp;
      </PersonalCredits>
      <PersonalCredits>
        and&nbsp;
        <NameLink href="https://twitter.com/vishalxk_">
          <Name>
            vishal
            <StyledUnderlineForVishal />
          </Name>
          <ExternalLinkForVishal />
        </NameLink>
      </PersonalCredits>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  margin-block-end: 8px;
`

const PersonalCredits = styled.p`
  display: flex;
  font-weight: var(--font-weight-regular);
  font-size: 1rem;
  color: var(--white);

  media ${QUERIES.mobile} {
    font-size: 0.5rem;
  }
`

const NameLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  color: inherit;
  text-decoration: none;
  position: relative;
`

const Name = styled.span`
  svg {
    position: absolute;
    bottom: 1px;
  }
`

const StyledUnderlineForVishal = styled(UnderlineForVishal)`
  color: var(--cobalt);
`

export {Footer}
