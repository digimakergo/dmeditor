import { GridViewOutlined } from "@mui/icons-material";
import { BlockHandler, RenderMainProps, RenderSettingProps } from "../blocktype";
import { BlockData, BlockLayoutData } from "../types"
import { CommonSetting } from "../Property";
import { Ranger } from "../utils/Ranger";
import './ContentBlock.css';

export interface DataContentBlock{
    list: Array<string>,
    columns:number,
    rows:number,
    title?: string
}

export const ContentBlock = (props:{data:BlockData, isActive:boolean})=>{
    const data = props.data.data as DataContentBlock;

    let arr:Array<string> = [];
    for( let i = 0; i< data.columns; i++ ){
        arr = [...arr,'auto'];
    }

    let max = data.columns * data.rows;

    const style={display: 'grid', gridTemplateColumns: arr.join(' '), gridColumnGap: 5, ...props.data.layout };

    return <div style={style} className="content-block-container">
        {data.list.slice(0, max).map((item)=><div className="content-block-item" dangerouslySetInnerHTML={{__html: item}}></div>)}
    </div>;
}

export const ContentBlockSettings = (props:RenderSettingProps)=>{
    const data = props.data.data as DataContentBlock;

    const changeCommon = (settings:BlockLayoutData)=>{
        let data = props.data;
        data.layout = settings;
        props.onSetting(data);
    }
    
    const updateColumn = (v:number)=>{
        let newData = {...data,columns:v};
        let updateData = props.data;
        updateData.data = newData;
        console.log(updateData);
        props.onSetting(updateData);
    }

    const updateRows = (v:number)=>{
        let newData = {...data,rows:v};
        let updateData = props.data;
        updateData.data = newData;
        props.onSetting(updateData);
    }

    return <div>
    <div>
        <table style={{width: '100%'}}>
        <tr><td style={{width: '80px'}}>Data</td><td>
            Articles under News <br />
            <a href="#">Browse</a>
            </td></tr>
            <tr><td style={{width: '80px'}}>Columns</td><td>
            <Ranger defaultValue={data.columns} min={1} max={5} step={1} onChange={updateColumn} />
            </td></tr>
            <tr><td>Rows</td><td>
            <Ranger defaultValue={data.rows} min={1} max={5} step={1} onChange={updateRows} />
            </td></tr>
        </table>
    </div>
    <CommonSetting  settings={props.data.layout}  onChange={changeCommon} />
    </div>;
}


export const ContentBlockHandler:BlockHandler = {
    type: 'content_grid',
    menu: {text:"Content grid", category:'content_block', icon: <GridViewOutlined /> },
    renderMain: (props:RenderMainProps)=><ContentBlock {...props} />,
    getDefaultData:():BlockData=>{
       return {
        layout:{},
        data:{
            list: ['<img width="100%" src="https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg" /><h3>Hello</h3>',
                    '<img width="100%" src="https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg" /><h3>Hello 2</h3>', 
                    '<img width="100%" src="https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg" /><h3>Hello 3</h3>',
                    '<img width="100%" src="https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg" /><h3>Hello 4</h3>',
                    '<img width="100%" src="https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg" /><h3>Hello 5</h3>',
                    '<img width="100%" src="https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg" /><h3>Hello 6</h3>',
                    '<img width="100%" src="https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg" /><h3>Hello 7</h3>',
                    '<img width="100%" src="https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg" /><h3>Hello 8</h3>',
                    '<img width="100%" src="https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg" /><h3>Hello 9</h3>',                    
                ],
            columns: 3,
            rows: 2
        }
      }
    },
    renderSetting:(props:RenderSettingProps)=><ContentBlockSettings {...props} />    
 }