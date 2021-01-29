import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gui-server';
  chartDataArray = new Array<ChartData>();
  multiChartData: MultiCartData;
  constructor(public http: HttpClient) {
    http.get('http://localhost:3000/electricity').subscribe(this.getData);
  }

  getData = (data) => {
    console.log(data);
    for (var i in data) {
      let cd = new ChartData(data[i]['Country Name'], "LineChart", data[i], data[i]['Country Name'])
      this.chartDataArray.push(cd);
    }
  }

}
export class MultiCartData {
  data = [];
  constructor(chartDataArray: Array<ChartData>) {
    for (const chartData of chartDataArray) {
      this.data.push(chartData.data);
    }

  }
}
export class ChartData {
  public data = [];
  constructor(public title, public type, json_data, public columnNames) {
    for (var i in json_data) {
      const parsedX = parseInt(i);
      const parsedY = parseFloat(json_data[i])
      if (!isNaN(parsedX) && !isNaN(parsedY)) {
        this.data.push([parsedX, parsedY]);
      }
    }
    console.log(this.data);

  }
}

export class fakeData {
  static data = [
    {
      "2009": "99,38271332",
      "2010": "99,8",
      "2011": "99,83049011",
      "2012": "99,89702606",
      "2013": "99,89428711",
      "2014": "99,95728302",
      "2015": "100",
      "2016": "100",
      "2017": "100",
      "2018": "100",
      "_id": "5fc3d437f4f4462784de5aa7",
      "Country Name": "Armenia",
      "Country Code": "ARM",
      "Indicator Name": "Access to electricity (% of population)",
      "Indicator Code": "EG.ELC.ACCS.ZS"
    },
    {
      "2009": "45,67055511",
      "2010": "42,7",
      "2011": "43,22201891",
      "2012": "69,1",
      "2013": "68,93326569",
      "2014": "89,5",
      "2015": "71,5",
      "2016": "97,7",
      "2017": "97,7",
      "2018": "98,71320343",
      "_id": "5fc3d437f4f4462784de5aa0",
      "Country Name": "Afghanistan",
      "Country Code": "AFG",
      "Indicator Name": "Access to electricity (% of population)",
      "Indicator Code": "EG.ELC.ACCS.ZS"
    },
    {

      "2009": "98,74726868",
      "2010": "98,87762451",
      "2011": "99,04978943",
      "2012": "98,76466047",
      "2013": "99,53858185",
      "2014": "99,84082031",
      "2015": "99,93136597",
      "2016": "99,99005127",
      "2017": "100",
      "2018": "100",
      "_id": "5fc3d437f4f4462784de5ad9",
      "Country Name": "Algeria",
      "Country Code": "DZA",
      "Indicator Name": "Access to electricity (% of population)",
      "Indicator Code": "EG.ELC.ACCS.ZS"
    }
  ]
}
