import WebServices from './webServices/webService'

export default function DataSource({name, setName, setData}) {
  return <WebServices name={name} setName={setName} setData={setData}/>
}