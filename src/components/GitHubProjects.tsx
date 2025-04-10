
import { useState, useEffect } from 'react';
import { ExternalLink, Star, GitFork, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { GitHubRepo } from '@/lib/types';

const GitHubProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // GitHub username - you'll need to replace this with the actual username when you get it
  const username = 'github-username';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setError('Failed to load GitHub repositories. Please check the username and try again.');
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  // Function to determine language color
  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-300',
      TypeScript: 'bg-blue-500',
      HTML: 'bg-red-500',
      CSS: 'bg-purple-500',
      Python: 'bg-green-500',
      Java: 'bg-orange-500',
    };

    return language ? colors[language] || 'bg-gray-500' : 'bg-gray-500';
  };

  return (
    <section id="github" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">GitHub Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Some of my open source work and personal projects on GitHub.
        </p>
        
        {error && (
          <div className="flex items-center p-4 mb-8 bg-destructive/10 border border-destructive/30 rounded-md">
            <AlertCircle className="h-5 w-5 text-destructive mr-2" />
            <p className="text-destructive">{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Skeleton loaders
            Array(6).fill(0).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4 mt-2" />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-1/4" />
                </CardFooter>
              </Card>
            ))
          ) : (
            repos.map((repo) => (
              <Card key={repo.id} className="hover-card">
                <CardHeader>
                  <CardTitle className="text-lg">{repo.name}</CardTitle>
                  <CardDescription>
                    {repo.description || 'No description provided'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {repo.language && (
                    <div className="flex items-center mb-2">
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 ${getLanguageColor(repo.language)}`}></span>
                      <span>{repo.language}</span>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center">
                      <GitFork className="h-4 w-4 mr-1" />
                      <span className="text-sm">{repo.forks_count}</span>
                    </div>
                  </div>
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:underline"
                  >
                    View <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href={`https://github.com/${username}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View all repositories on GitHub <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;
