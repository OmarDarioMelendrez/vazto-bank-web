import React from 'react'
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH2,
  ServicesCard,
  ServicesH3,
  ServicesIcon,
  ServicesP,
} from './ServicesElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH2>Our services</ServicesH2>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH3>Reduce expenses</ServicesH3>
          <ServicesP>
            We help to reduces your fess and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH3>Virtual Offices</ServicesH3>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH3>Premium Benefits</ServicesH3>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
