import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={295}
    height={370}
    viewBox="0 0 295 370"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="127" cy="81" r="73" /> 
    <rect x="26" y="160" rx="0" ry="0" width="198" height="76" /> 
    <rect x="64" y="286" rx="0" ry="0" width="113" height="41" /> 
    <rect x="80" y="252" rx="0" ry="0" width="83" height="20" />
  </ContentLoader>
)

export default MyLoader