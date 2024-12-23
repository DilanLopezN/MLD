import React, { useEffect, useState } from 'react'

interface Time {
  days: number
  hours: number
  minutes: number
}

const RelationshipTimer: React.FC<{ startDate: string }> = ({ startDate }) => {
  const [time, setTime] = useState<Time>({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate)
      const now = new Date()
      const difference = now.getTime() - start.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)

      setTime({ days, hours, minutes })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000) // Atualiza a cada segundo

    return () => clearInterval(interval) // Limpa o intervalo quando o componente desmonta
  }, [startDate])

  return (
    <div className="flex justify-center gap-4 p-4">
      {/* Card de Dias */}
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg w-48 text-center">
        <h2 className="text-xl font-bold">Dias</h2>
        <p className="text-4xl">{time.days}</p>
      </div>

      {/* Card de Horas */}
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg w-48 text-center">
        <h2 className="text-xl font-bold">Horas</h2>
        <p className="text-4xl">{time.hours}</p>
      </div>

      {/* Card de Minutos */}
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg w-48 text-center">
        <h2 className="text-xl font-bold">Minutos</h2>
        <p className="text-4xl">{time.minutes}</p>
      </div>
    </div>
  )
}

export default RelationshipTimer
