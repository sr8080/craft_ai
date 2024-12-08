import React from 'react'

interface Params{
  params:{name:string}
}

const Page = ({params}:Params) => {
  return (
    <div>{""}
    <h1>{params.name}</h1>
    </div>
  )
}

export default Page