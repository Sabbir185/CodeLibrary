#include<bits/stdc++.h>
using namespace std;

vector<int> vec ;
vector<string> pros ;

vector<string>::iterator p_it;
vector<int>::iterator it;
int  t_cnt=0;

void findWaitingTime(string processes[], int n,
                     int bt[], int wt[], int quantum)
{
    int rem_bt[n];
    for (int i = 0 ; i < n ; i++)
        rem_bt[i] =  bt[i];

    int t = 0;    // Current total time

    while (1)
    {
        bool done = true;

        for (int i = 0 ; i < n; i++)
        {
            if (rem_bt[i] > 0)
            {
                done = false;   // pending process

                if (rem_bt[i] > quantum)
                {
                    t += quantum;
                    rem_bt[i] -= quantum;
                    pros.push_back(processes[i]);
                }
                else
                {
                    t = t + rem_bt[i];
                    wt[i] = t - bt[i];
                    rem_bt[i] = 0;
                    pros.push_back(processes[i]);
                }

                //----> vector part
                vec.push_back(t);
                t_cnt++ ;
            }

        }
        if (done == true)
            break;
    }
}

void findTurnAroundTime(string processes[], int n,
                        int bt[], int wt[], int tat[])
{
    for (int i = 0; i < n ; i++)
        tat[i] = bt[i] + wt[i];
}

void findavgTime(string processes[], int n, int bt[],
                 int quantum)
{
    int wt[n], tat[n], total_wt = 0, total_tat = 0;

    findWaitingTime(processes, n, bt, wt, quantum);

    findTurnAroundTime(processes, n, bt, wt, tat);

    cout << "Processes "<< " Burst time "
         << " Waiting time " << " Turn around time\n";

    for (int i=0; i<n; i++)
    {
        total_wt = total_wt + wt[i];
        total_tat = total_tat + tat[i];
        cout << " " << processes[i] << "\t\t" << bt[i] <<"\t "
             << wt[i] <<"\t\t " << tat[i] <<endl;
    }

    //---> Gantt Chart design part <-----
    cout<<"\n Gantt Chart : \n"<<endl;

    for(p_it=pros.begin(); p_it!=pros.end(); p_it++)
    {
        cout<<"      "<< *p_it ;
        cout<<" ";

    }
    cout<<"\n   ";
    for(int d=0; d<vec.size(); d++)
    {
        cout<<"|-------|";
    }

    cout<<"\n   0";
    int ds=1;
    for(it=vec.begin(); it!=vec.end(); it++)
    {
        ds++ ;
        cout<<"       "<< *it ;

        if(ds>10 || ds==4 || ds==2)  // for space
            cout<<" ";
    }


    //---> end Gantt Chart <----

    cout << "\n\nAverage waiting time = "
         << (float)total_wt / (float)n;
    cout << "\nAverage turn around time = "
         << (float)total_tat / (float)n;
}

int main()
{
    int n;
    cout<<"Enter number of process : ";
    cin>>n ;
    cout<<"Enter processes : "<<endl;
    string processes[n];
    for(int i=0; i<n; i++)
    {
        cin>>processes[i];
    }

    int burst_time[n];
    cout<<"Enter Burst time : ";
    for(int i=0; i<n; i++)
    {
        cin>>burst_time[i];            // 10, 5, 8
    }

    int quantum = 2;
    findavgTime(processes, n, burst_time, quantum);
    return 0;
}
