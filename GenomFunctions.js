function rnd(min, max) {
    return Math.random() * (max - min) + min;
}

function NewGenerationByWheel(r, phi, spher, N, nPoints, Level) {
    var SumSpher = 0;
    var ProbablyBeParent = new Array (N);
    var tempr = new Array (N), tempphi = new Array (N);
    for (var i = 0; i < N; ++i) {
        SumSpher += + spher[i];
        tempr[i] = new Array(nPoints);
        tempphi[i] = new Array(nPoints);
    }
    ProbablyBeParent[0] = spher[0] / SumSpher;
    for (var i = 1; i < N; ++i) {
        ProbablyBeParent[i] = ProbablyBeParent[i-1] + spher[i] / SumSpher;
    }
//  alert ("Crosing!!!!!");
    //crosover
    for (var pp=0; pp<N; pp++) {
		var mother=-1, father=-1;
		var pmother, pfather;
		pmother=Math.random();
		for (var i = 0; i < N; ++i)	{
			if ( i==0 && pmother>=0. && pmother<ProbablyBeParent[i]) {
				mother=i;
				i=N;
			}
			if ( i!=0 && pmother>=ProbablyBeParent[i-1] && pmother<ProbablyBeParent[i]) {
				mother=i;
				i=N;
			}
		}
		do  {
			pfather=Math.random();
			for (var i=0; i<N; i++) {
				if ( i==0 && pfather>=0. && pfather<ProbablyBeParent[i]) {
					father=i;
					i=N;
				}
				if ( i!=0 && pfather>=ProbablyBeParent[i-1] && pfather<ProbablyBeParent[i]) {
					father=i;
					i=N;
				}
			}
		}while ( father==mother );
//		alert ("Father="+father+"  mother="+mother);
        Crossing(r[father], phi[father], r[mother], phi[mother], nPoints, tempr[pp], tempphi[pp], Level);
	}//*/
	
	for (var pp=0; pp<N; pp++){
	    for (var i = 0; i < nPoints; ++i)	{
	    r[pp][i]=tempr[pp][i];
	    phi[pp][i]=tempphi[pp][i];
	    spher[pp][i]=0;
	    
	    }
	}
   
}

function Crossing(rFather, phiFathre, rMother, phiMother, nPoints, rChild, phiChild, Level) {
    var NIt=0;
   
    // crossing at half
	if (Level==0)  {
		if (nPoints%2==0)    {
			NIt=nPoints/2;
			for (var i=0; i<NIt; i++)   {
				rChild[i]=rFather[i];
				phiChild[i]=phiFathre[i];
				rChild[i+NIt]=rMother[i+NIt];
				phiChild[i+NIt]=phiMother[i+NIt];
			}
		}//end if (nPoints%2==0)
        else    {
			NIt=Math.floor(nPoints/2); 
			for (var i=0; i<NIt; i++) {
				rChild[i]=rFather[i];
			    phiChild[i]=phiFathre[i];
			    rChild[i+NIt+1]=rMother[i+NIt+1];
			    phiChild[i+NIt+1]=phiMother[i+NIt+1];
			}
			rChild[NIt]=(rFather[NIt]+rMother[NIt])/2.;
			phiChild[NIt]=(phiFather[NIt]+phiMother[NIt])/2.;
		}
	}//end if (Level==0)

       // crossing at random half
	if (Level==1)    {
		var first=5;
		first=Math.floor(rnd(0,nPoints-1));
		if (nPoints%2==0)   {
			NIt=nPoints/2;
			for (var i=0; i<NIt; i++)   {
				rChild[(i+first)%nPoints]=rFather[(i+first)%nPoints];
			    phiChild[(i+first)%nPoints]=phiFathre[(i+first)%nPoints];
			    rChild[(i+first+NIt)%nPoints]=rMother[(i+first+NIt)%nPoints];
			    phiChild[(i+first+NIt)%nPoints]=phiMother[(i+first+NIt)%nPoints];
			}
		}//end if (NP%2==0)
		else 	{
			NIt=Math.floor(nPoints/2);
			for (var i=0; i<NIt; i++)	{
				rChild[(i+first)%nPoints]=rFather[(i+first)%nPoints];
			    phiChild[(i+first)%nPoints]=phiFathre[(i+first)%nPoints];
			    rChild[(i+first+NIt)%nPoints]=rMother[(i+first+NIt)%nPoints];
			    phiChild[(i+first+NIt)%nPoints]=phiMother[(i+first+NIt)%nPoints];
			}
			rChild[(first+NIt)%nPoints]=(rFather[(first+NIt)%nPoints]+rMother[(first+NIt)%nPoints])/2.;
			phiChild[(first+NIt)%nPoints]=(phiFather[(first+NIt)%nPoints]+phiMother[(first+NIt)%nPoints])/2.;
		}
	}//end if (Level==1)*/

// crossing by random chromosome
	if (Level>=2)   {
		var nx = new Array(nPoints);
		var temp, counter=0, ncrossing;
		ncrossing=Level;
		
		for (var i=0; i<nPoints; i++)
		    nx[i]=0;
		
		do  {
		    temp=rnd(0, NP-1);
			if (nx[temp]==0) {nx[temp]=1; counter++;}
		}while (counter!=ncrossing);
			
		for (var i=0; i<NP; i++)    {
			if (nx[i]==0) {
			    rChild[i]=rFather[i];
		        phiChild[i]=phiFathre[i];
		    }
			if (nx[i]==1) {
		        rChild[i]=rMother[i];
		        phiChild[i]=phiMothre[i];
		    }
		}
	}//end if (Level>=2)*/
}//*/
