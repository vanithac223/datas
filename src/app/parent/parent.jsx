'use client'
import React, { useState } from 'react'
import { datas } from '../data/data'
import Child from '../child/child'
export default function Parent() {
    const [change]=useState(datas)
  return (
    <div>{
        change.map((val)=>{
            return(
                <Child key={val.Id} val={val}/>
            )
        }

        )
        }
      
    </div>
  )
}
