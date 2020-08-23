import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/main.scss'
import Dropzone from '../components/dropzone'
import SearchBox from '../components/searchBox'
import Filters from '../components/filters'
import JobList from '../components/jobList'

const Offers = () => {
	return (
		<Layout jambotron>
			<div className="container">
				<div className="col-33">
					<div className="card">
            <Dropzone />
					</div>
					<div className="card">
            <SearchBox />
					</div>
				</div>
				<div className="col-67">
					<div className="filters">
            <Filters />
          </div>
          <div className="offers">
            <JobList />
          </div>
				</div>
			</div>
		</Layout> 
	)
}

export default Offers;