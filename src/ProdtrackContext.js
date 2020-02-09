import React from "react"
const ProdtrackContext = React.createContext({
	data: [],
	addData: () => {},
	deleteData: () => {},
	updateData: () => {},
	setData: data => {}
})
export default ProdtrackContext
