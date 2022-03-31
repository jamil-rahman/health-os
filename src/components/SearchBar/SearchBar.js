import { motion } from 'framer-motion'
import './searchbar.css';

function SearchBar({placeholder}) {
  return (
    <form className="search-form">
          <input
            className="search-bar"
            placeholder={placeholder}
            type="text"

          />
          <motion.button
            className="btn text-white mx-2 my-sm-0"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            type="submit"
          >
            Search
          </motion.button>
        </form>
  )
}

export default SearchBar