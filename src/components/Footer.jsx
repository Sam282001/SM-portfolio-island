import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col mb-2 items-center justify-center'>
      <h1 className='text-slate-500'>&#169;2025-Sameer Maitre</h1>
      <div className="flex flex-row items-center justify-center">
        <a href="https://github.com/Sam282001" target="_blank"><FaGithub className="me-2 text-slate-600" /></a>
        <a href="https://www.linkedin.com/in/sameer-maitre/" target="_blank"><FaLinkedin className="me-2 text-slate-600" /></a>
      </div>
    </div>
  )
}

export default Footer
