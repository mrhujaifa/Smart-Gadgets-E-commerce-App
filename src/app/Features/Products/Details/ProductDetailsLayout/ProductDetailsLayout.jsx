"use client"

export default function ProductDetailsLayout({children}) {
  return (
    <div>
        {/* navbar */}
        
        {/* layout outlet */}
        <main>
            {children}
        </main>
    </div>
  )
}
