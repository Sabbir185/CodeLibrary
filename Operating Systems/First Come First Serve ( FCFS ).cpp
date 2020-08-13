/* Bismillahir Rahmanir Rahim             Sample Test Case 1 : No.Of process 4 ; P1 0 5     Case 2 : No.Of process 4 ; P1 0 2
   Md. Sabbir Ahmmed                                                             p2 1 3                                P2 1 2
   dept. of CSE                                                                  P3 2 8                                P3 5 3
   Northern University Of Business & Technology,Khulna                           p4 3 6                                P4 6 4
*/

#include <iostream>
#include <algorithm>
#include <utility>
#define endl "\n"
using namespace std;

struct process
{
    char pro[10];
    int arvl_time;
    int brst_time;
};

bool cmp( process a, process b )    // sort according to arrival time
{
    return ( a.arvl_time < b.arvl_time );
}

int main()
{
    int p;
    cout<<" Enter total number of process : ";
    cin>>p;

    process arr[p] ;   // creating object of struct

    cout<<" Enter your process name < space > arrival time < space > burst time : "<<endl;

    for( int i=0; i<p; i++ )
    {
        cout<<" ";
        cin>> arr[i].pro >> arr[i].arvl_time >> arr[i].brst_time ;     // input part
    }

    sort( arr, arr+p,cmp ) ;  // sorting ascending order ,  according to arrival time

    cout<<"\n   Process      Arrival Time      Burst Time      Start Time      Waiting Time      Turn_around time "<<endl;
    int start_time = arr[0].arvl_time;
    int waiting_time=0, turn_around=0;
    double wt_sum = 0, t_sum = 0 ;

    for( int i=0; i<p; i++ )
    {

        if( start_time >= arr[i].arvl_time )
        {
            waiting_time = start_time - arr[i].arvl_time ;   // 1st iteration waiting time
            wt_sum += waiting_time ;  // total waiting time

            turn_around = arr[i].brst_time + waiting_time ;  // 1st iteration turn around time
            t_sum += turn_around ;   // total turn around time

            cout<<"\n     "<< arr[i].pro <<"     --  >     "<< arr[i].arvl_time <<
                "       -->     "<< arr[i].brst_time <<"       -->     "<< start_time <<
                "       -->     "<< waiting_time <<"       -->     "<< turn_around <<endl;
        }
        else
        {
            start_time = arr[i].arvl_time ;    // start time cannot small value(time) than arrival time .. start time either equal or greater than arrival time :)

            waiting_time = start_time - arr[i].arvl_time ;   // 1st iteration waiting time
            wt_sum += waiting_time ;  // total waiting time

            turn_around = arr[i].brst_time + waiting_time ;   // 1st iteration turn around time
            t_sum += turn_around ;     // total turn around time

            cout<<"\n     "<< arr[i].pro <<"     --  >     "<< arr[i].arvl_time <<
                "       -->     "<< arr[i].brst_time <<"       -->     "<< start_time <<
                "       -->     "<< waiting_time <<"       -->     "<< turn_around <<endl;
        }

        start_time += arr[i].brst_time ;   // update start_time

    }


    //  ---> Gantt Chart design part <----

    cout<<"\n\n   # Gantt Chart : \n"<<endl;
    cout<<"   ";
    for( int i=0; i<p; i++ )
    {
        cout<<"    "<<arr[i].pro;
        cout<<"    ";
    }
    cout<<"\n";
    cout<<"   ";
    for( int k=0; k<p ; k++ )
    {
        cout<<"|--------|";
    }

    cout<<"\n";
    cout<<"    ";

    int start_sum  = arr[0].arvl_time , done=0; ;
    for( int i=0; i<p; i++ )
    {
        done  = start_sum ;

        if( start_sum >= arr[i].arvl_time )       // same logic of start_time which has already described above :)
        {
            cout<< start_sum <<"        ";
        }
        else
        {
            start_sum = arr[i].arvl_time ;
            cout<< start_sum <<"        ";
        }

        start_sum = start_sum + arr[i].brst_time ;
    }
    cout<< arr[p-1].brst_time + done ;
    cout<<"\n";

    // ----> End Gantt Chart design part <---

    cout<<"\n Average waiting time : "<< double(wt_sum / p) << endl;     // total waiting time by total number of process
    cout<<"\n Average waiting time : "<< double(t_sum / p) << endl;      // total turn around time by total number of process


    return 0;
}

