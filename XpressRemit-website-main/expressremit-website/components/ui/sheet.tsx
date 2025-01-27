import React from 'react'

interface SheetProps {
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  isOpen: boolean
  onClose: () => void
}

export function Sheet({ children, side = 'right', isOpen, onClose }: SheetProps) {
  const sideClasses = {
    top: 'top-0 left-0 w-full',
    right: 'top-0 right-0 h-full',
    bottom: 'bottom-0 left-0 w-full',
    left: 'top-0 left-0 h-full',
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose} />
      )}
      <div
        className={`fixed z-50 bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          sideClasses[side]
        } ${
          isOpen
            ? 'translate-x-0 translate-y-0'
            : side === 'left'
            ? '-translate-x-full'
            : side === 'right'
            ? 'translate-x-full'
            : side === 'top'
            ? '-translate-y-full'
            : 'translate-y-full'
        }`}
      >
        {children}
      </div>
    </>
  )
}