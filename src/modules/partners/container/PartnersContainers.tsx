import React from 'react'
import PartnersView from '../view/PartnersView'
import useLogosLogic from '../hooks/useLogosLogic'

const PartnersContainers = () => {
    const {logos, onClickImage, open, filterData, oneItem} = useLogosLogic()
  return (
    <PartnersView logos={logos} data={oneItem} filter={filterData} onClickImage={onClickImage} open={open}/>
  )
}

export default PartnersContainers
