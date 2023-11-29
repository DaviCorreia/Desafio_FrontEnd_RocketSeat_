"use client"

import { FilterBar } from '@/components/filter-bar'
import { styled } from 'styled-components'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {

  return (

      <PageWrapper>
        <FilterBar/>
      </PageWrapper>
  )
}