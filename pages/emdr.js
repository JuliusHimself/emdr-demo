import EmdrTranslate from "../components/emdr-translate";
import EmdrFlash from "../components/emdr-flash";
import EmdrDotRow from "../components/emdr-dot-row";
import EmdrClipPath from "../components/emdr-clip-path";
import EmdrLineRotation from "../components/emdr-line-flip";
import styles from "../styles/Home.module.css";
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Link from "next/link";

export default function Emdr() {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
	setValue(newValue);
  };

  return (
	  <>
		<div className={styles.container}>
		  <br/><br/><br/>
		  <Button>
			<Link href="/">
			  Back to homepage
			</Link>
		  </Button>
		  <br/><br/><br/>
		  <br />
		  <h1 className={styles.title}>EMDR TESTS</h1>
		  <p className={styles.description}>Lateral eye movements are the most commonly used external stimulus for EMDR treatment. Below are a few different ways to implement emdr virtually. The challenge is to make an smooth animation that is entertaining enough to hold attention but not be the focus.</p>
		  <br />
		</div>

		<div className={styles.containerEmdr}>
		  <TabContext value={value}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
			  <TabList onChange={handleChange} aria-label="lab API tabs example">
				<Tab label="Test 1: Dot Flash" value="1" />
				<Tab label="Test 2: Dot Translate X" value="2" />
				<Tab label="Test 3: Line clip path" value="3" />
				<Tab label="Test 4: Dot row" value="4" />
				<Tab label="Test 5: Line rotation" value="5" />
			  </TabList>
			</Box>
			<TabPanel value="1"><EmdrFlash /></TabPanel>
			<TabPanel value="2"><EmdrTranslate /></TabPanel>
			<TabPanel value="3"><EmdrClipPath /></TabPanel>
			<TabPanel value="4"><EmdrDotRow /></TabPanel>
			<TabPanel value="5"><EmdrLineRotation /></TabPanel>
		  </TabContext>
		</div>

	  </>
  )
}
